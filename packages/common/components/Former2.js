import React from "react";

class Former2 extends React.Component {
  render() {
    let action = this.props.site.former2_url + "/form";
    let redirect_url = this.props.site.origin + this.props.redirect_path;
    let form_name = this.props.site.name + " - " + this.props.name;
    return (
      <form method="POST" action={action}>
        <input type="hidden" name="_redirect_url" value={redirect_url} />
        <input type="hidden" name="_form_name" value={form_name} />
        {this.props.children}
      </form>
    );
  }
}

export default Former2;
