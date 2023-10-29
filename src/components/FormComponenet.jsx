import React, { useState }  from 'react';
import styled from 'styled-components';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

import Input from './common/Input';

const Form= styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const IconContainer= styled.div`
    color: #737B86;
    display: inline;
    font-size: 20px;
    cursor: pointer;
`

function FormComponenet(props) {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    return (
        <Form>
                <Input
                    name= 'Login ID'
                    type="text"
                    id="username"
                    placeholder="Enter Login ID"
                />
                <Input
                    name= 'Password'
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter Password"
                    icon= {
                            <IconContainer onClick={togglePasswordVisibility}>
                                {showPassword? <AiFillEye/>: <AiFillEyeInvisible/> }
                            </IconContainer>
                            }
                />
            </Form>
    );
}

export default FormComponenet;