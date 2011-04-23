// Avatar
public var g_go_avatar : GameObject;

// Main loop boolean
static var s_main_loop : boolean;

// Is the game running?
static var s_game_is_running : boolean;

// Is it possible to move the avatar?
static var s_move_is_possible : boolean;

function Start()
{
	s_main_loop = true;
	
	while(s_main_loop)
	{
		// Launch the main game function
		yield StartCoroutine(Game_Main());
		
		// Once the game is over we wait for 3 seconds
		yield WaitForSeconds(3);
		
		// Launch the large view of the matrix
		
		// Change the main loop status to exit the loop
		s_main_loop = false;
	}
	
	Application.Quit();
}

function Game_Main()
{
	// Initialize
	yield StartCoroutine(Initialisation());
	
	while(s_game_is_running)
	{
		s_move_is_possible = true;
		StartCoroutine(Move_Avatar());
		
		yield;
	}
}

function Initialisation()
{
	// Initialize the game variables
	s_game_is_running = true;
	s_move_is_possible = false;
	
	yield WaitForSeconds(1);
}

function Move_Avatar()
{
	while(s_move_is_possible)
	{
		if(Input.anyKey)
		{
			var v_speed_translate : float = 0.05;
			var v_speed_rotate : float = 1;
			
			if(Input.GetKey(KeyCode.UpArrow))
			{
				g_go_avatar.transform.Translate(Vector3(0, 0, v_speed_translate * Time.deltaTime));
			}
			else if(Input.GetKey(KeyCode.RightArrow))
			{
				g_go_avatar.transform.Rotate(Vector3.up, v_speed_rotate * Time.deltaTime , Space.World);
			}
			else if(Input.GetKey(KeyCode.DownArrow))
			{
				g_go_avatar.transform.Translate(Vector3(0, 0, -v_speed_translate  * Time.deltaTime));
			}
			else if(Input.GetKey(KeyCode.LeftArrow))
			{
				g_go_avatar.transform.Rotate(Vector3.up, -v_speed_rotate * Time.deltaTime, Space.World);
			}
		}
		
		yield;
	}
}
