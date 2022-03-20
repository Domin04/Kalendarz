import { AppointmentContainer } from '../styledComponent/index'

function Appointment( props ) {
    

    return (
      <AppointmentContainer>
       <p> Nazwa: {props.Name} </p>
       <p>Miejsce: {props.Place}</p>
        <p> Godzina: {props.Time}: 00</p>
      </AppointmentContainer>
    );
  }
  
  export default Appointment;
  