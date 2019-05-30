import CourseLandingDocument from "@app/course-landing/document";

import site from '../config'

class Document extends CourseLandingDocument {
  static getInitialProps(ctx) {
    return {site: site};
  }
}

export default Document
