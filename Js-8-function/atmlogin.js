function atmLogin(){clearInterval
  const card="12345678", pin="4321";
  for(let i=3;i>0;i--){
    if(prompt("Card Number:")===card && prompt("PIN:")===pin){
      alert("Login Successful!"); return;
    }
    alert(`Wrong details. Attempts left: ${i-1}`);
  }
  alert("Account Locked.");
}
