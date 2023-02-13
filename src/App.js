function App() {
  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            <td id='name'>Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td aria-describedby='name'>J Blogs</td>
          </tr>
          <tr>
            <td aria-describedby='name'>J Doe</td>
          </tr>
          <tr>
            <td aria-describedby='name'>J Hancock</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
