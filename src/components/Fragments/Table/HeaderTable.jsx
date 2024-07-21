const HeaderTable = (props) => {
    const { color = 'primary', children } = props;
    return (
        <h4 className={`text-${color} text-start mb-3`}>{children}</h4>
    )
}

export default HeaderTable;