import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const CategorySearch = () => {
    return (
        <div className='mb-10 flex flex-col items-center gap-2'>
            <h2 className='font-bold
        text-4xl
        tracking-wide'>Search <span className='text-brandBlue'>Doctors</span></h2>
            <h3 className='text-gray-500 text-xl'>Search your Doctor and Book an Appointment</h3>

            <div className="flex w-full mt-4 max-w-sm items-center space-x-2">
                <Input className='outline-none' type="text" placeholder="Search..." />
                <Button type="submit" className='bg-brandBlue hover:bg-brandBlue'>
                    <Search className='h-4 w-4'/>
                    Search</Button>
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default CategorySearch