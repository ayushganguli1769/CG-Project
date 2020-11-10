import turtle
import time
def drawSemiCircleFunction(col,rad,val):
    my_turtle.color(col)
    my_turtle.circle(rad,-180)
    my_turtle.up()
    my_turtle.setpos(val,0)
    my_turtle.down()
    my_turtle.right(180)

colours = ['violet','indigo','blue','green','yellow','orange','red']
print("If you want rainbow with all colours press 1 else if you want partial rainbow press any other key")
bool_val = int(input())

if bool_val == 1:
    col = colours
else:
    print("You have choosen the option to make a custom rainbow.")
    print("Choose the colours from list below. Enter the colours you want to choose as space seperated input")
    for i in range(len(colours)):
        print("%d -- %s"%(i+1,colours[i]))
    colours_index = list(map(int,input().strip().split()))
    col = []
    for x in colours_index:
        col.append(colours[x-1])
my_turtle = turtle.Turtle()
screen = turtle.Screen()
screen.setup(600,600)
screen.bgcolor('black')
my_turtle.right(90)
my_turtle.width(10)
my_turtle.speed(7)
for i in range(len(col)):
        drawSemiCircleFunction(col[i],10*(i+8),-10*(i+1))
time.sleep(10)
my_turtle.hideturtle()