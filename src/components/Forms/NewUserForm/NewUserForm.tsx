import { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import { useDispatch } from "react-redux";
import { User } from "../../../models";
import { addUser } from "../../../redux/states/people";
import './NewUserForm.scss';



const NewUserForm = ({setSuccess,setToastMessage,showToastMethod}: any) => {
  const initialForm: User = {
    name: {
      firstname: "",
      lastname: "",
    },
    username: "",
    email: "",
    password: "",
    phone: "",
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
  };

  const [formState, setFormState] = useState<User>(initialForm);

  const dispatch = useDispatch();
 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if(JSON.stringify(formState) === JSON.stringify(initialForm)){

      setSuccess('danger');
      setToastMessage('Please type user information at least!');
    }else{
      setSuccess('success');
      setToastMessage('New User Added!!');
    }
    

    // dispatch redux action
    dispatch(addUser(formState));

    // toast message
    showToastMethod(true);

    // form with default values
    // setFormState(initialForm);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id="myForm">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <div className="form-group-container">
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={formState.name.firstname}
              onChange={(e) =>
                setFormState((previous) => ({
                  ...previous,
                  name: {
                    ...previous.name,
                    firstname: e.target.value,
                  },
                }))
              }
            />
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={formState.name.lastname}
              onChange={(e) =>
                setFormState((previous) => ({
                  ...previous,
                  name: {
                    ...previous.name,
                    lastname: e.target.value,
                  },
                }))
              }
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCredentials">
          <Form.Label>User Credentials</Form.Label>
          <div className="form-group-container">
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={formState.username}
              onChange={(e) =>
                setFormState({ ...formState, username: e.target.value })
              }
            />
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />

            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
            />

            <Form.Control
              type="text"
              placeholder="Phone Number"
              value={formState.phone}
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>User Adress Data</Form.Label>
          <div className="form-group-container">
            <Form.Control
              type="text"
              placeholder="Enter City"
              value={formState.address.city}
              onChange={(e) =>
                setFormState((previous) => ({
                  ...previous,
                  address: {
                    ...previous.address,
                    city: e.target.value,
                  },
                }))
              }
            />
            <Form.Control
              type="text"
              placeholder="Enter Street"
              value={formState.address.street}
              onChange={(e) =>
                setFormState((previous) => ({
                  ...previous,
                  address: {
                    ...previous.address,
                    street: e.target.value,
                  },
                }))
              }
            />
            <Form.Control
              type="number"
              placeholder="Enter Number"
              value={formState.address.number}
              onChange={(e) =>
                setFormState((previous) => ({
                  ...previous,
                  address: {
                    ...previous.address,
                    number: e.target.value,
                  },
                }))
              }
            />

            <Form.Control
              type="text"
              placeholder="Enter Zipcode"
              value={formState.address.zipcode}
              onChange={(e) =>
                setFormState((previous) => ({
                  ...previous,
                  address: {
                    ...previous.address,
                    zipcode: e.target.value,
                  },
                }))
              }
            />
          </div>
        </Form.Group>
      </Form>
      
    </>
  );
};

export default NewUserForm;
