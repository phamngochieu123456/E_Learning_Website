export const Test = () =>
{
    var rows = [];
    for (var i = 0; i < 10; i++) {
        rows.push(<button>abc</button>);
    }
    return <tbody>{rows}</tbody>;
}
