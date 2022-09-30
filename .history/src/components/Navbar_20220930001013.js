();

const sideList = () => (
     <Box className={
               classes.menuSliderContainer
          }
          component="div">
          <Link to={'/myphoto'}>
               <div className="flex items-center justify-center gap-4 pt-2 text-white">
                    <Avatar className={
                              classes.avatar
                         }
                         src={avatar}
                         alt="Shindano Singi"/>
                    <div>
                         <h3 className="font-bold">Shindano Singi</h3>
                         <p>Full Stack Developer</p>
                    </div>
               </div>
          </Link>

          <Divider/>
          <List> {
               menuItems.map((item, i) => (
                    <ListItem button
                         key={i}
                         className={
                              classes.listItem
                         }
                         onClick={
                              () => setOpen(false)
                         }

                         component={Link}
                         to={
                              item.listPath
                    }>
                         <ListItemIcon className={
                              classes.listItem
                         }>
                              {
                              item.listIcon
                         } </ListItemIcon>
                         <ListItemText primary={
                              item.listText
                         }/>
                    </ListItem>
               ))
          } </List>
     </Box>
);

return (<React.Fragment>
     <Box component="nav">
          <AppBar position="fixed"
               className={
                    classes.appbar
          }>
               <Toolbar>
                    <IconButton onClick={
                         () => setOpen(true)
                    }>
                         <ArrowBackIcon className={
                              classes.arrow
                         }/>
                    </IconButton>
                    <Typography variant="h5"
                         className={
                              classes.title
                    }>
                         Portfolio
                    </Typography>

               </Toolbar>
               <div className="flex invisible py-1 md:visible">
                    <BottomNavigation className={
                         classes.bottomNavContainer1
                    }>
                         <div className="invisible md:flex md:gap-2 md:visible">
                              <Link to={'/projects'}>
                                   <div className="bg-[tan] text-[#222]  p-1 rounded-lg">My Apps</div>
                              </Link>
                              <Link to={'/skills'}>
                                   <div className="bg-[tan] text-[#222]  p-1 rounded-lg">Skills</div>
                              </Link>
                              <Link to={'/contact'}>
                                   <div className="bg-[tan] text-[#222]  p-1 rounded-lg">Contact Me</div>
                              </Link>

                              <a href={pdf}
                                   target="_blank"
                                   rel='noopener noreferrer'>
                                   <div className="bg-[tan] text-[#222]  p-1 rounded-lg">Download Resume</div>
                              </a>

                         </div>
                    </BottomNavigation>

                    <BottomNavigation className={
                         classes.bottomNavContainer2
                    }>
                         <a href="https://github.com/ShindanoSingi" target="_blank" rel='noopener noreferrer'>
                              <BottomNavigationAction icon={<GitHub/>}
                                   className={
                                        classes.root2
                                   }/>
                         </a>
                         <a href="https://www.linkedin.com/in/shindano-singi/" target="_blank" rel='noopener noreferrer'><BottomNavigationAction icon={<LinkedIn/>}
                                   className={
                                        classes.root3
                                   }/></a>
                    </BottomNavigation>
               </div>

          </AppBar>
     </Box>
     <Drawer open={open}
          anchor="left"
          onClose={
               () => setOpen(false)
     }>
          {
          sideList(
