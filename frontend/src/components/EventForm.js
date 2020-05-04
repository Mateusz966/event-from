import React from 'react';
import { Grid, TextField, Button } from "@material-ui/core";
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../actions/event.actions';

const EventForm = () => {

  const { register, errors, reset, setError, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();

  const submitForm = async (data, event) => {
    event.preventDefault();
    try {
      dispatch(signUpUser(data));
    } catch (error) {
      setError(error);
    }
  }

  const { firstName, lastName, email, date } = errors;


  return (
    <Grid container>
      <Grid component={'form'} data-testid="form"  onSubmit={handleSubmit(submitForm)} item xs={4}>
        <TextField 
          inputRef={register({ required: 'First name is required' })} 
          name={'firstName'}
          placeholder={'First name'}
          helperText={firstName?.message}
          error={firstName?.message.length > 0}
        />
        <TextField 
          inputRef={register({ required: 'Last name is required' })} 
          name={'lastName'}
          placeholder={'Last name'}
          helperText={lastName?.message}
          error={lastName?.message.length > 0}
        />
        <TextField 
        inputRef={register({ required: 'Email is required' })} 
          name={'email'}
          placeholder={'Email'}
          helperText={email?.message}
          error={email?.message.length > 0}
        />
        <TextField 
          inputRef={register({ required: 'Date is required' })} 
          name={'date'}
          placeholder={'Date'}
          helperText={date?.message}
          error={date?.message.length > 0}
          type="date"
        />
        <Grid item xs={12}>
          <Button disabled={!formState.isValid} type="submit">
            Send
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default EventForm
