import React, {Fragment} from'react'
import {Menu, Transition} from'@headlessui/react'
import {ChevronDownIcon} from'@heroicons/react/solid'

function classNames(...classes: string[]){
    return classes.filter(Boolean).join('')
}

interface DropdownProps {
    dropdownLabel:string,
        linkNames:string[],
        linkPaths:string[]
}

const Dropdown:React.FC<DropdownProps> = (props)=>{

    const LINK_NUMBER = props.linkNames.length;

    const dropdownItem = (linkName:string,linkPath:string)=>{
        return(
            <div className="py-1">
                <Menu.Item>
                    {({active})=>(
                        <a
                            href={linkPath}
                            className={classNames(
                                active?'bg-gray-100text-gray-900':'text-gray-700',
                                'blockpx-4py-2text-sm'
                            )}
                        >
                            {linkName}
                        </a>
                    )}
                </Menu.Item>
            </div>
        )
    }

    const allDropdownItems = () => {
        let index = 0;
        const dropDownElements = []
        while(index < LINK_NUMBER){
            dropDownElements.push(dropdownItem(props.linkNames[index],props.linkPaths[index]))
            index++;
        }
        return(
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {dropDownElements.map((element) => element)}
            </Menu.Items>
        )
    }

    return(
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-500 text-sm font-medium text-white hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {props.dropdownLabel}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                {allDropdownItems()}
            </Transition>
        </Menu>
    )
}
export default Dropdown
