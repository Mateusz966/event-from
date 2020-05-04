// @ts-nocheck
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import EventForm from '../components/EventForm';
import { act } from 'react-dom/test-utils';


describe('event form tests', () => {

  it('renders correctly',  () => {
    const { container } = render(<EventForm />);  
  });

  it('Inputs are required and show error if sended empty', async () => {
    const { getByText, getByTestId } = render(<EventForm />);

    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      getByText('First name is required');
      getByText('Last name is required');
      getByText('Email is required');
      getByText('Date is required');
    })
  });

  it('Send button is disabled until all fields are filled', async () => {
    const { container } = render(<EventForm />);
    const button = container.querySelector('button');

    act(() => {
      fireEvent.click(button);
    })

    await wait(() => {
      expect(button).toBeDisabled();
    })
  });

  it('Send button allow send form after fill fields', async () => {
      const { container } = render(<EventForm />);
      const button = container.querySelector('button');
      const firstName = container.querySelector('input[name="firstName"]');
      const lastName = container.querySelector('input[name="lastName"]');
      const email = container.querySelector('input[name="email"]');
      const date = container.querySelector('input[name="date"]');

        fireEvent.change(firstName, {
          target: {
            value: 'sample'
          }
        });
        fireEvent.change(lastName, {
          target: {
            value: 'sample'
          }
        });
        fireEvent.change(email, {
          target: {
            value: 'sample@sample'
          }
        });
        fireEvent.change(date, {
          target: {
            value: '2020-04-16'
          }
        });

        expect(button.disabled).toBe(false);
  });
});
