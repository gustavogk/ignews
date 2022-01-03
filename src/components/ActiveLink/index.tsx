import { useRouter } from 'next/router';
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName , ...rest}: ActiveLinkProps){

    const { asPath, pathname } = useRouter()

    const className = asPath === rest.href || rest.href === `/${pathname.split('/')[1]}`
        ? activeClassName
        : '';

    return(
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link >
    );
}