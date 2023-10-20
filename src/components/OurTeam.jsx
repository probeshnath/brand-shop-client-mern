import React from 'react'
import TeamMember from './TeamMember';

const OurTeam = () => {
    const companyMembers = [
        {
          id: 1,
          img: 'https://i.ibb.co/GcCDwn5/6-2.jpg',
          name: 'John Doe',
          position: 'CEO'
        },
        {
          id: 2,
          img: 'https://i.ibb.co/nQ5SkbB/tm9.jpg',
          name: 'Jane Smith',
          position: 'Director'
        },
        {
          id: 3,
          img: 'https://i.ibb.co/dQMsWCb/team1.jpg',
          name: 'Bob Johnson',
          position: 'Sales Manager'
        },
        {
          id: 4,
          img: 'https://i.ibb.co/HxSrZd8/t1-2.png',
          name: 'Alice Brown',
          position: 'Co-Founder'
        }
      ];
      
    return (
        <div className='max-w-6xl mx-auto'>
            <div className=' py-10 '>
                <div className='text-center pb-8'>
                    <h2 className='text-4xl text-red-700'>Our Sales Team</h2>
                    <p className='text-sm lg:aftertag uppercase pt-2 relative'>Our Professional all team member are active</p>
                </div>

                <div className='grid grid-cols-1 gap-4 px-3 lg:px-0 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        companyMembers.map((member)=>(
                            <TeamMember key={member.id} member={member} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default OurTeam