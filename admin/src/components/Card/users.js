import React, { Component, Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import { UserModal } from '../functions/user.modal.update';
import { UserModalDelete } from '../functions/user.modal.delete';

export default class Users extends Component {
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
                key: "phone_user",
                text: "Phone",
                className: "phone_user",
                align: "left",
                sortable: true
            },
            {
                key: "birth_user",
                text: "Birth",
                className: "birth_user",
                align: "left",
                sortable: true
            },
            {
                key: "sex_user",
                text: "Sex",
                className: "sex_user",
                sortable: true
            },
            {
                key: "id_type_user",
                text: "Type",
                className: "id_type_user",
                sortable: true
            },
            {
                key: "name_user",
                text: "Name",
                className: "name_user",
                sortable: true
            },
            {
                key: "id_user",
                text: "ID_User",
                className: "id_user",
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
                            <UserModal data={record}/>
                            <UserModalDelete data={record} />
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
        for (var i = 0; i < props.data.length; i++) {
            props.data[i].birth_user = (props.data[i].birth_user).substr(0,10)
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

