const appRoot = document.querySelector('#application-root')

function App(props) {
  return (
  <main>
  <h1>{props.name} Resume</h1>
  <section className ={'contact'}>
    <h2>Contact</h2>
        <ul>
            <li>{props.email}</li>
            <li>{props.telephone}</li>
            <li><img src={'https://www.aqua.org/-/media/Images/blog/2017/Animals/blog-salamander-content-640x420.ashx?la=en&hash=22C38EAFDCA8A2B8D3D24B761FEFCA048CE03C56'}
            alt={'Student Pic'} /></li>
        
        </ul>
  </section>

  <section className={'work experience'}>
    <h2>Work Experience</h2>
    <h3>Account Executive, Apple</h3>
          <i>2007-2011</i>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h3>CEO, Evil Corp</h3>
          <i>2011-present</i>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</section>
  </main>
  
  )
}


  ReactDOM.render(
    <App 
     name = 'Sally Salamander'
     email = 'sally@thinkful.com'
     telephone = '222-2222'
    />,appRoot
  );