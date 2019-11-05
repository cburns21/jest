import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form1 from "../../src/components/form1";
import { TextField } from 'formik-material-ui';
import { JestEnvironment } from "@jest/environment";
import { shallow, mount, configure, simulate  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Formik, FastField, Form, ErrorMessage,  } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import expect from "expect";
import sinon from "sinon";



configure({ adapter: new Adapter() });
jest.mock('../../src/components/form1', () => {
    
})

describe('Form1', () => {
        it('should call onsubmit when click submit button', () => {
            const onSubmit= jest.fn()
            const wrapper = mount(<Form onSubmit={onSubmit} />)
            const instance = wrapper.instance()
            const spy = jest.spyOn(instance, 'onSubmit', {
                target: {
                    value: true
                }
            })
            wrapper.find('Button').simulate('click')
            expect(spy).toHaveBeenCalledTimes(1)
        })
        // it('should call validation message when field not filled in', () => {
        //     const fieldInput = shallow(<Form1/>)
        //     fieldInput.find("Field").simulate("change", {
        //         target: {
        //             value: "" 
        //         }
        //     })
        // })
    })

// it('calls onSubmit prop function when form is submitted', () => {
//     const onSubmitFn = jest.fn();
//     const wrapper = mount(<Formik onSubmit={onSubmitFn}/>)
//     const form = wrapper.find('input')
//     form.simulate('click')
//     expect(onSubmitFn).toHaveBeenCalledTimes(1)
// })



// test("should have validation error given input field is touched and error exists on form", async () => {
//     const name = "account_sid";
//     const label = "account_sid:";
//     const { getByLabelText, findByTestId } = render(
//       <Formik
//         validate={values => {
//           let errors = {};
  
//           if (!values.account_sid) {
//             errors.account_sid = "Required!";
//           }
  
//           return errors;
//         }}
//       >
//           <Grid name="account_sid"  label="account_sid:"/>
//       </Formik>
//     );
  
//     const input = getByLabelText(label);
  
//     // Call blur without inputting anything which should trigger a validation error
//     fireEvent.blur(input);
  
//     const validationErrors = await findByTestId(`errors-${name}`);
  
//     expect(validationErrors.innerHTML).toBe("Required!");
//   });
