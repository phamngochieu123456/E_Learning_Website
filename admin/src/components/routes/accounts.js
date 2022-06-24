import React, { Component } from 'react';
import { AccountData } from '../functions/accounts.data';

export default class Accounts extends Component {
    componentDidMount() {
        document.title = 'DUT-Elearning Admin | Accounts';
      }

    render() {
        return (
            <AccountData />
        )
    }
}

