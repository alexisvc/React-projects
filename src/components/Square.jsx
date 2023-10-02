//Componente Square
export const Square = ({ children,isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
      updateBoard(index)
    }
    return (
      <button
        className={className}
        onClick={handleClick}>
        {children}
      </button>
    )
  }