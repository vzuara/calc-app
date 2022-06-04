import PropTypes from 'prop-types'
import { Button } from './Button'

const Functions = ({onClickDelete, onClickClear}) => (
    <section className="math-operations">
        <Button type="button-long-text" text='clear' clickHandler={onClickClear} />
        <Button text='&larr;' clickHandler={onClickDelete} />
    </section>
)


Functions.propTypes = {
    onClickDelete: PropTypes.func.isRequired,
    onClickClear: PropTypes.func.isRequired
}

export { Functions }