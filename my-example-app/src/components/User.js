import PropTypes from "prop-types";
function User(props){
    console.log(props);

    return (
    <>
    
        <h1>
            {
                props.isLoggedIn ? `Selam User Props ${props.name} ${props.surname} ${props.age} ${props.dogumYili}`:'Giriş Yapmadınız'
            }
        </h1>
        
        <h1>Friends</h1>
            {
            //props.friends && friends varsa göster
             props.friends && 
             props.friends.map((friend,index)=>( 
                <div key={index}>
                    {index+1} - {friend}
                </div>

            ))
            }
        <h1>Family</h1>
        {
            props.family.map((ailem)=>
            <div key={ailem.id}>
                {ailem.id} - {ailem.name}
            </div>
            )
          
        }
    

        </>
    );

}
User.propTypes={
    name: PropTypes.string.isRequired, // isRequired bu alan zorunlu oldu
    surname: PropTypes.string.isRequired,
    age: PropTypes.number,
    isLoggedIn : PropTypes.bool.isRequired,
     //eğer sayı ile matematiksel işlem yapmayacaksak hem sayı hem string kabul edebilmek için...
    dogumYili:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    friends : PropTypes.array,
    family : PropTypes.array

};

export default User;