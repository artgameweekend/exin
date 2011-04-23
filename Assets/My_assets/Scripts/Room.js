class C_Room extends MonoBehaviour
{
	// Coordinate in the matrix
	public var c_X : int;
	public var c_Y : int;
	
	// Properties
	public var c_Shape : int;		// 0 : Square, 1 : Ball, 2 : Cylinder
	public var c_Color : int;		// ???
	
	function c_Room_Constructeur(p_X : int, p_Y : int, p_Shape : int, p_Color : int)
	{
		c_X = p_X;
		c_Y = p_Y;
		c_Shape = p_Shape;
		c_Color = p_Color;
	}
}