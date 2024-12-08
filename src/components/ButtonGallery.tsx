type ButtonProps = {
    className: string
    children: string | React.ReactNode
} & Omit<React.ComponentProps<'button'>, 'children'>


const ButtonGallery = ({ className, children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={className}>{children}</button>
    )
}

export default ButtonGallery