import CourseLandingDocument from "@app/course-landing/document";

import site from "../config";

class Document extends CourseLandingDocument {
  constructor(...args) {
    super(...args);
    this.site = site;
  }
}

export default Document;
