import React from "react";

function createMarkup() {
  return {
    __html: `<!--Start of Tawk.to Script-->
  <script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6523bc90eb150b3fb99f7af4/1hc9ph60k';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  </script>
  <!--End of Tawk.to Script-->`,
  };
}

export function Tawk() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
