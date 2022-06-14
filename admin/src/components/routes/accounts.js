import React, { Component, Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete, AiFillPrinter, AiTwotoneFileExcel } from "react-icons/ai";

export default class Accounts extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "name",
                text: "Name",
                className: "name",
                align: "left",
                sortable: true,
            },
            {
                key: "address",
                text: "Born",
                className: "address",
                align: "left",
                sortable: true
            },
            {
                key: "postcode",
                text: "Gender",
                className: "postcode",
                sortable: true
            },
            {
                key: "rating",
                text: "State",
                className: "rating",
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
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => this.editRecord(record)}
                                style={{marginRight: '5px'}}>
                                <BiEdit />
                            </button>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => this.deleteRecord(record)}>
                                <AiFillDelete />
                            </button>
                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            button: {
                extra: true,
            }
        }
        
        this.state = {
            records: [
              {
                "id": "55f14312c7447c3da7051b26",
                "address": "31/01/2001",
                "name": "Bùi Phan Minh Hưng",
                "postcode": "Male",
                "rating": "Active",
                "type_of_food": "Chinese"
              },
              {
                "id": "55f14312c7447c3da7051b27",
                "address": "24/05/2001",
                "name": "Phạm Ngọc Hiếu",
                "postcode": "Male",
                "rating": "Active",
                "type_of_food": "Thai"
              },
              {
                "id": "55f14312c7447c3da7051b28",
                "address": "21/12/2001",
                "name": "Đoàn Ngọc Châu Anh",
                "postcode": "Male",
                "rating": "Active",
                "type_of_food": "Thai"
              },
            ]
        }
        this.extraButtons =[
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export Excel",
                children:[
                    <AiTwotoneFileExcel aria-hidden='true'></AiTwotoneFileExcel>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
            },
            {
                className:"btn btn-primary buttons-pdf",
                title:"Print",
                children:[
                    <AiFillPrinter aria-hidden='true'></AiFillPrinter>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
                onDoubleClick:(event)=>{
                    console.log("doubleClick")
                }
            },
        ]
    }

    editRecord(record) {
        console.log("Edit Record", record);
    }

    deleteRecord(record) {
        console.log("Delete Record", record);
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

