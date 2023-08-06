import PropTypes from 'prop-types';
import { Input, Span, Label } from './filter.styled';

const Filter = ({ onChange }) => {
    return (
        <Label htmlFor="filter">
        <Span>Find contacts by name</Span>
        <Input onChange={onChange} type="filter" name="filter" />
        </Label>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;