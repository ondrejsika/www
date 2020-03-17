import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";

export default props => {
  return (
    <>
      <h2 id="upcomming" className="pt-5">
        Upcomming Training Sessions
      </h2>
      <UpcomingSessions lang={props.lang} location={props.location} />
    </>
  );
};
