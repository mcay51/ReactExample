function User(props){
    console.log(props);

    return (
    <div>
    {
        props.isLoggedIn ? `Selam User Props ${props.name} ${props.surname}`:'Giriş Yapmadınız'
    
    }
        </div>
    );

}


export default User;