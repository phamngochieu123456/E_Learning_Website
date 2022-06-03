import { Col, Container, Row } from "react-bootstrap";
import Cardcourse from "../Card/cardcourse.component";

export const CardCourseData = () =>
{
    var cols = [];
    var rows = [];
    for (var i = 0; i < 9; i++) {
        cols.push(<Col><Cardcourse/></Col>);
    }
    for (var i = 0; i < cols.length; i++)
    {
        rows.push(<Row>{cols[i]}{cols[++i]}{cols[++i]}</Row>)
        rows.map((cols)=>{
            <Row key={i}>{cols}</Row>
        })
    }
    return <Container>{rows}</Container>;
}
