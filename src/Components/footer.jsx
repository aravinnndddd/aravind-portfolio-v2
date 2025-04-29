import React from 'react'
import { GithubIcon, InstagramIcon, YoutubeIcon, } from 'lucide-react'
export const Footer = () => {
  return (
    <footer className='h-[10vh] bg-black flex flex-col items-center justify-center'>
      <h2 className="text-white font-bold">Developed and Designed by: Aravind</h2>
	<div className="flex gap-4 mt-4">
		<a href="https://www.instagram.com/aravinnndddd/" target="_blank">
			<InstagramIcon color='white'/>
		</a>
		<a href="https://github.com/aravinnndddd" target="_blank">
    <GithubIcon color='white'/>
</a>
		<a href="https://www.youtube.com/channel/UCTbpAfHw_Frd39eGidNo5vQ" target="_blank">
				<YoutubeIcon color='white'/>
		</a>
    
	</div>
    </footer>
  )
}
