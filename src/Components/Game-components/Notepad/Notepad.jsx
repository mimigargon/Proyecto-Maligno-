import React from "react";

const Notepad = () => {

 
    return (
    <>
        		<div class="notepadContainer">
			<div class="notepad">
				<div class="notepad-bar">
					<div class="notepad-icon">
						<img src="http://www.milk.com.hk/sites/default/files/imagecache/largebanner/sites/default/files/notepad_1.png" alt="notepad icon"/>
					</div>
					<div class="notepad-title">Programs - Notepad</div>
						<div class="notepad-exit">
							<div class="button-exit">&#10060;</div>
						</div>
						<div class="notepad-maximize">
							<div class="button-maximize">
								<div class="icon-maximize"></div>
							</div>
						</div>
						<div class="notepad-minimize">
							<div class="button-minimize">
								<div class="icon-minimize"></div>
							</div>
						</div>
				</div>
				<div class="notepad-settings">
				 	<div class="settings-text"><span class="underline">F</span>ile</div>
				 	<div class="settings-text"><span class="underline">E</span>dit</div>
				 	<div class="settings-text"><span class="underline">S</span>earch</div>
				 	<div class="settings-text"><span class="underline">H</span>elp</div>
				</div>
				<div class="notepad-content">
					<h1>Maligno </h1> 
					<p>
                        dgjkdhfgjkdhfg
					</p>
				</div> 
			</div> 
		</div> 
    </>
  );
};

export default Notepad;
