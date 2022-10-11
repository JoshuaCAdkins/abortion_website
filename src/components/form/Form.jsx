import { checkboxDiv, checkboxInput, form, formDiv, input, label} from './formStyles.js';
import React from 'react';
import { FormButton } from '../FormButton/FormButton.js';
export const Form = () => {
    return(
        <div style={formDiv}>
        <form action='' method='GET' style={form}>
            <label for='state-input' style={label}>What State are you in?</label>
            <input name='state-input' list='states' id='state-input' type='text' style={input} required/>
                <datalist id='states'>
                <option value="Alabama"></option>
						<option value="Alaska"></option>
						<option value="Arizona"></option>
						<option value="Arkansas"></option>
						<option value="California"></option>
						<option value="Colorado"></option>
						<option value="Connecticut"></option>
						<option value="Delaware"></option>
						<option value="District of Columbia"></option>
						<option value="Florida"></option>
						<option value="Georgia"></option>
						<option value="Hawaii"></option>
						<option value="Idaho"></option>
						<option value="Illinois"></option>
						<option value="Indiana"></option>
						<option value="Iowa"></option>
						<option value="Kansas"></option>
						<option value="Kentucky"></option>
						<option value="Louisiana"></option>
						<option value="Maine"></option>
						<option value="Maryland"></option>
						<option value="Massachusetts"></option>
						<option value="Michigan"></option>
						<option value="Minnesota"></option>
						<option value="Mississippi"></option>
						<option value="Missouri"></option>
						<option value="Montana"></option>
						<option value="Nebraska"></option>
						<option value="Nevada"></option>
						<option value="New Hampshire"></option>
						<option value="New Jersey"></option>
						<option value="New Mexico"></option>
						<option value="New York"></option>
						<option value="North Carolina"></option>
						<option value="North Dakota"></option>
						<option value="Ohio"></option>
						<option value="Oklahoma"></option>
						<option value="Oregon"></option>
						<option value="Pennsylvania"></option>
						<option value="Rhode Island"></option>
						<option value="South Carolina"></option>
						<option value="South Dakota"></option>
						<option value="Tennessee"></option>
						<option value="Texas"></option>
						<option value="Utah"></option>
						<option value="Vermont"></option>
						<option value="Virginia"></option>
						<option value="Washington"></option>
						<option value="West Virginia"></option>
						<option value="Wisconsin"></option>
						<option value="Wyoming"></option>
                </datalist>
            <label for='wlp-input' style={label}>When was your last period?</label>
            <input name='wlp-input' id='wlp-input' type ='date' style={input}/>
            <label for='age-input' style={label}>How old are you?</label>
            <input name='age-input' id='age-input' type='number' min='5' max='70' style={input} required/>
            <legend style={label}>Is any of these your case?</legend>
            <fieldset id='special-inputs' style={checkboxDiv}>
                <input id='rape-incest-input' name='incest-rape-input' type='checkbox' style={checkboxInput}/>
                <label for='rape-incest-input'>Rape / Incest</label>
                <input id='health-risks-input' name='health-risk-input' type='checkbox' style={checkboxInput}/>
                <label for='health-risks-input'>Health Risks</label>
            </fieldset>
            <FormButton />
         </form>
         </div>
    )
}