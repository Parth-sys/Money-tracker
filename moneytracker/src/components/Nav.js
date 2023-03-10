import React from "react"

function Nav(){

return(
<>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Money Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/transactions">transactionlist</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signup">Signup</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/userlist">userlist</a>
      </li>
    </ul>
  </div>
</nav>
</>
)
}
export default Nav;