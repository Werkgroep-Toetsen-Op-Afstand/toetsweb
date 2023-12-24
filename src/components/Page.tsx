import {FunctionComponent} from "react";
import {motion} from "framer-motion";

interface Props {
    animation?: any;
    className?: string;
    children: any;
}

const defaultAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .1,
            ease: 'easeInOut'
        }
    }
}
const Page: FunctionComponent<Props> = ({animation, className, children}) => {
    return (
        <motion.div
            variants={animation ?? defaultAnimation}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            className={className}>
            {children}
        </motion.div>
    )
}

export default Page;