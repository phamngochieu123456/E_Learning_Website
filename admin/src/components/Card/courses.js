import React, { Component, Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import { CourseModal } from '../functions/course.modal';
import { CourseModalDelete } from '../functions/course.modal.delete';
import { CourseModalCreate } from '../functions/course.modal.create';

export default class Courses extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "name_class",
                text: "Name",
                className: "name_class",
                align: "left",
                sortable: true,
            },
            {
                key: "description_class",
                text: "Description",
                className: "description_class",
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
        // this.extraButtons =[
        //     {
        //         className:"btn btn-primary buttons-pdf",
        //         title:"Create new Course",
        //         children:[
        //             <AiTwotoneFileExcel aria-hidden='true'></AiTwotoneFileExcel>
        //         ],
        //         onClick:(event)=>{
        //             console.log(event);
        //         },
        //     },
        //     {
        //         className:"btn btn-primary buttons-pdf",
        //         title:"Print",
        //         children:[
        //             <AiFillPrinter aria-hidden='true'></AiFillPrinter>
        //         ],
        //         onClick:(event)=>{
        //             console.log(event);
        //         },
        //         onDoubleClick:(event)=>{
        //             console.log("doubleClick")
        //         }
        //     },
            
        // ]
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

