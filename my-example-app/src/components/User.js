function User(props){
    console.log(props);

    return (
    <>
    
        <h1>
            {
                props.isLoggedIn ? `Selam User Props ${props.name} ${props.surname} ${props.age}`:'Giriş Yapmadınız'
            }
        </h1>
        
        <h1>Friends</h1>
            {
            props.friends.map((friend,index)=>(
                <div key="index">
                    {index+1} - {friend}
                </div>

            ))
            }
        <h1>Family</h1>
        {
            props.family.map((ailem)=>
            <div key="ailem.id">
                {ailem.id} - {ailem.name}
            </div>
            )
          
        }
    

        </>
    );

}


export default User;