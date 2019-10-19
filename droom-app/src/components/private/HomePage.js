import React from "react";

// export default function HomePage() {
//   if(localStorage.getItem('token')) {
//   return (
//     <h1> HomePage</h1>
//   )
//   }
//   else {window.location.href="/"}
// }

export default function HomePage(props) {
  console.log(`Props from the HomePage: ${props}`);
  return (
    <div>
      <h1> HomePage</h1>
    </div>
  );
}
