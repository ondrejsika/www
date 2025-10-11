import { useForm } from "react-hook-form";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

const SessionRegisterForm = (props) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    let data = {
      course_slug: props.course_slug,
      email: values.email,
    };
    console.log(data);
    fetch(props.site.trainingcrm_url + "/api/waitinglist/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      if (res.status == 200) Router.push("/odeslano");
      else Router.push("/odeslano-chyba");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
      <div className="form-group mx-sm-3 mb-2 align-items-center">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          ref={register({})}
          style={{
            borderRadius: "8px",
            border: "2px solid #e1e1e1",
            padding: "0.625rem 1rem",
            fontSize: "1rem",
            transition: "all 0.2s ease",
            height: "44px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#131480",
          color: "#fff",
          border: "2px solid #131480",
          borderRadius: "8px",
          padding: "0.625rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "0.5rem",
          height: "44px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
          e.currentTarget.style.opacity = "0.9";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
          e.currentTarget.style.opacity = "1";
        }}
      >
        Chci být informován o novém termínu
      </button>
    </form>
  );
};

export default SessionRegisterForm;
