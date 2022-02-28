import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

import { makeStyles } from '@material-ui/core/styles'
import history from 'history.js'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import configuration from "../../../config/configuration";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
        //backgroundImage: '/assets/images/rt/login.jpg'
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const JwtLogin = () => {
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: 'visitor@myportfolio.com',
        password: 'someDummyPwd',
        rememberMe: true
    })
    const [message, setMessage] = useState('')
    const { login } = useAuth()

    const classes = useStyles()
    const portfolio = configuration.portfolio;

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {
            await login(userInfo.email, userInfo.password)
            history.push('/')
        } catch (e) {
            console.log(e)
            setMessage(e.message)
            setLoading(false)
        }
    }

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-200"
                                src={`${process.env.PUBLIC_URL}${portfolio.loginImg}`}
                                // src="/assets/images/illustrations/dreamer.svg"
                                // src={`${process.env.PUBLIC_URL}/assets/images/illustrations/dreamer.svg`}
                                // src={`${process.env.PUBLIC_URL}/assets/images/rt/login2.jpg`}
                                // src="/assets/images/rt/login2.jpg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    disabled
                                    //onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />    
                                <TextValidator
                                    className="mb-3 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={userInfo.password}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <FormControlLabel
                                    className="mb-3 min-w-288"
                                    name="agreement"
                                    onChange={handleChange}
                                    control={
                                        <Checkbox
                                            size="small"
                                            onChange={({
                                                target: { checked },
                                            }) =>
                                                handleChange({
                                                    target: {
                                                        name: 'rememberMe',
                                                        // name: 'agreement',
                                                        value: checked,
                                                    },
                                                })
                                            }
                                            // checked={userInfo.agreement || true}
                                            checked={userInfo.rememberMe}
                                        />
                                    }
                                    label="Remeber me"
                                />

                                {message && (
                                    <p className="text-error">{message}</p>
                                )}

                                <div className="flex flex-wrap items-center mb-4">
                                    <div className="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
                                        >
                                            Sign in
                                        </Button>
                                        {loading && (
                                            <CircularProgress
                                                size={24}
                                                className={
                                                    classes.buttonProgress
                                                }
                                            />
                                        )}
                                    </div>
                                    <span className="mr-2 ml-5">or</span>
                                    {/* //change28022022 */}
                                    <Button
                                        className="capitalize"
                                        onClick={() =>
                                            history.push('/portfolio/session/signup')
                                        }
                                    >
                                        Sign up
                                    </Button>
                                </div>
                                {/* //change28022022 */}
                                <Button
                                    className="text-primary"
                                    onClick={() =>
                                        history.push('/portfolio/session/forgot-password')
                                    }
                                >
                                    Forgot password?
                                </Button>

                                {/* <p className='text-green'>Donot change the pre-populated Email Address.</p> */}
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default JwtLogin
