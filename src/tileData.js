import React from 'react';
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';


export const mailFolderListItems = (
	<div>
			<Link to='/'>
				<ListItem button>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>

					<ListItemText primary="Inbox" />
				</ListItem>
			</Link>

			<Link to='/hola2'>
				<ListItem button>
					<ListItemIcon>
						<StarIcon />
					</ListItemIcon>

					<ListItemText primary="Starred" />
				</ListItem>
			</Link>

			<Link to='/hola3'>
				<ListItem button>
					<ListItemIcon>
						<SendIcon />
					</ListItemIcon>
					<ListItemText primary="Send mail" />
				</ListItem>
			</Link>

			<Link to='/hola4'>
				<ListItem button>
					<ListItemIcon>
					<DraftsIcon />
					</ListItemIcon>
					<ListItemText primary="Email" />
				</ListItem>
			</Link>
	</div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
