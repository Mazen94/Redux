
import React from 'react';
import Badge from './Badge';

export default function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark row">
      <div class="col-md-10 pl-5">
        <a class="navbar-brand" href="#">My Gallery</a>
      </div>
      <div class="col-md-2">
        <Badge />
      </div>
    </nav>
  )
}
