import React from 'react'
import ButtonOutline from '@app/course-landing/components/ButtonOutline';

import courses from '@app/data/training/courses.yml'
import sessions from '@app/data/training/sessions.yml'

const Translate = (props) => {
  return <>{props[props.lang]}</>
}

class UpcomingSessions extends React.Component {
  render() {
    let course = this.props.course
    let lang = this.props.lang

    return (
      <table className="table">
        <tr>
          <th>
            <Translate
              lang={this.props.lang}
              en='Course'
              cs='Kurz'
            />
          </th>
          <th>
            <Translate
              lang={this.props.lang}
              en='City'
              cs='Mesto'
            />
          </th>
          <th>
            <Translate
              lang={this.props.lang}
              en='Price'
              cs='Cena'
            />
          </th>
          <th></th>
        </tr>
        {
          sessions.map((element, i) => {
            return (
              <tr key={i}>
                <td>{element.name}</td>
                <td>{element.city}</td>
                <td>{element.price}</td>
                <td>
                  <ButtonOutline
                    btnUrl='https://ondrej-sika.cz/skoleni/docker/poptavka/'>
                    Nezávazně poptat školení
                  </ButtonOutline>
                </td>
              </tr>
            )
          })
        }
      </table>
    );
  }
}

export default UpcomingSessions
