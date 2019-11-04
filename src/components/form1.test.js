import React from "react";
import { render, fireEvent } from "@testing-library/react";
import form1 from "../../src/components/form1";
import { Formik } from "formik";
import { TextField } from 'formik-material-ui';
import { JestEnvironment } from "@jest/environment";
import { shallow, mount, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



// test("validation pop up should appear if credential fields are not filled out") 

configure({ adapter: new Adapter() });
jest.mock('../../src/components/form1', () => {

})

it('calls onSubmit prop function when form is submitted', () => {
    const onSubmitFn = jest.fn();
    const wrapper = mount(<Formik onSubmit={onSubmitFn}/>)

    const form = wrapper.find('formik')
    form.simulate('submit')
    expect(onSubmitFn).toHaveBeenCalledTimes(1)
})

// test("should have validation error given input field is touched and error exists on form", async () => {
//   const name = "account_sid";
//   const label = "Account SID Number:";
//   const { getByLabelText, findByTestId } = render(
//     <Formik
//       validate={values => {
//         let errors = {};

//         if (!values.account_sid) {
//           errors.account_sid = "Required.";
//         }

//         return errors;
//       }}
//     >
//           <Field 
//                     name="account_sid"
//                     type="text"
//                     placeholder="account_sid"
//             />
//     </Formik>
//   );

//   const input = getByLabelText(label);

//   // Call blur without inputting anything which should trigger a validation error
//   fireEvent.blur(input);

//   const validationErrors = await findByTestId(`errors-${name}`);

//   expect(validationErrors.innerHTML).toBe("Required.");
// }); 
