"use client"
import React from 'react'
import WordMark from "@/components/WordMark";
import {Content} from "@prismicio/client";
import Link from "next/link";
import {PrismicNextLink} from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";

type NavBarProps = {
    settings: Content.SettingsDocument
}

export default function NavBar({settings}: NavBarProps) {
    return (
        <nav className={'px-4 py-4 md:px-6 md:py-6'} aria-label="Main">
            <div className="flex mx-auto max-w-6xl flex-col   justify-between py-2 font-medium text-white md:flex-row md:items-center">
                <Link href="/">
                    <WordMark />
                    <span className={'sr-only'}>Glisten.ai Home Page</span>
                </Link>


                    <ul className={'flex gap-6'}>
                        {settings.data.navigation.map((item) => {

                            if (item.cta_button) {
                                return (
                                    <li key={item.label}>
                                    <ButtonLink field={item.link}>
                                        {item.label}
                                    </ButtonLink>
                                    </li>
                                )
                            }

                            return(
                            <li key={item.label}>
                                <PrismicNextLink field={item.link}
                                className={'inline-flex min-h-11 items-center'}
                                >
                                    {item.label}
                                </PrismicNextLink>
                            </li>
                        )})}
                    </ul>
            </div>
        </nav>
    )
}
