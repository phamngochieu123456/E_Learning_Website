import React, { Component, Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import { AccountModal } from '../functions/account.modal.update';
import { AccountModalDelete } from '../functions/account.modal.delete';

export default class Accounts extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "id_account",
                text: "ID",
                className: "id_account",
                align: "left",
                sortable: true,
            },
            {
                key: "name_account",
                text: "Name",
                className: "name_account",
                align: "left",
                sortable: true
            },
            {
                key: "pass_account",
                text: "Pass",
                className: "pass_account",
                align: "left",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => { 
                    return (
                        <Fragment>
                            <AccountModal data={record}/>
                            <AccountModalDelete data={record} />
                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            button: {
                excel: true,
                extra: false,
            }
        }
        
        this.state = {
            records: props.data
        }
    }

    render() {
        return (
            <div style={{margin:'5%'}}>
                <ReactDatatable
                    config={this.config}
                    records={this.state.records}
                    columns={this.columns}
                    extraButtons={this.extraButtons}
                />
            </div>
        )
    }
}

