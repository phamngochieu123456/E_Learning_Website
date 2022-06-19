import React, { Component, Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import { CourseModal } from '../functions/course.modal';
import { CourseModalDelete } from '../functions/course.modal.delete';
import { CourseModalCreate } from '../functions/course.modal.create';

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
                key: "active_account",
                text: "State",
                className: "active_class",
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
                            <CourseModal data={record}/>
                            <CourseModalDelete data={record} />
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
                <CourseModalCreate/>
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

