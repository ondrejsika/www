import React from 'react'

const links = {
  git: {
    cz: 'https://ondrejs-sika.cz/skoleni/git?x_source=headline',
    uk: 'https://ondrejs-sika.uk/training/git?x_source=headline',
  },
  gitlabci: {
    cz: 'https://ondrejs-sika.cz/skoleni/gitlab-ci?x_source=headline',
    uk: 'https://ondrejs-sika.uk/training/gitlab-ci?x_source=headline',
  },
  docker: {
    cz: 'https://ondrejs-sika.cz/skoleni/docker?x_source=headline',
    uk: 'https://ondrejs-sika.uk/training/docker?x_source=headline',
  },
  kubernetes: {
    cz: 'https://ondrejs-sika.cz/skoleni/kubernetes?x_source=headline',
    uk: 'https://ondrejs-sika.uk/training/kubernetes?x_source=headline',
  },
  ansible: {
    cz: 'https://ondrejs-sika.cz/skoleni/ansible?x_source=headline',
    uk: 'https://ondrejs-sika.uk/training/ansible?x_source=headline',
  },
}

class Navigation extends React.Component {
  render() {
    let location = this.props.location || 'cz'
    return (
    <div className='container-fluid'>
      <div className="container container-width">
        <div className='nav-bar'>
          <ul className='mt-2 mb-2'>
          <p>
            <li><a href={links.git[location]}>Docker</a></li>
            <li><a href={links.kubernetes[location]}>Kubernetes</a></li>
            <li><a href={links.ansible[location]}>Ansible</a></li>
            <li><a href={links.git[location]}>Git</a></li>
            <li><a href={links.gitlabci[location]}>Gitlab CI</a></li>
            </p>
          </ul>
        </div>
      </div>
    </div>
    )}
  }

export default Navigation
