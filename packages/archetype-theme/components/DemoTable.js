import React from 'react'

class DemoTable extends React.Component {
  render() {
    return (
      <table>
        {
          this.props.data.map((element, i) => {
            return (
              <tr key={i}>
                <td>{element.name}</td>
                <td>{element.age}</td>
              </tr>
            )
          })
        }
      </table>
    );
  }
}

export default DemoTable
