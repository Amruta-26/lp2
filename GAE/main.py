# import webapp2

# class MainPage(webapp2.RequestHandler):
#     def get(self):
#         self.response.write("Hello World <br/> How r u")

# app=webapp2.WSGIApplication([('/',MainPage)], debug=True)


# import webapp2

# class MainPage(webapp2.RequestHandler):
#     def get(self):
#         for i in range (5):
#             self.response.write("Name <br/> Seat_No <br/> Department <br/>")

# app=webapp2.WSGIApplication([('/',MainPage)], debug=True)


# import webapp2

# class MainPage(webapp2.RequestHandler):
#     def get(self):
#         for i in range (10):
#              self.response.write("T190058xxx <br>")

# app=webapp2.WSGIApplication([('/',MainPage)], debug=True)


# import webapp2

# class MainPage(webapp2.RequestHandler):
#     def get(self):
#         for i in range (1,11):
#             self.response.write("5 X {} = {} <br/>".format(i,5*i))

# app=webapp2.WSGIApplication([('/',MainPage)], debug=True)


# import webapp2

# class MainPage(webapp2.RequestHandler):
#     def get(self):
#         n1=0
#         n2=1
        
#         for i in range (8):
#             self.response.write("{} <br/>".format(n1))
#             n3=n1+n2
#             n1=n2
#             n2=n3


# app=webapp2.WSGIApplication([('/',MainPage)], debug=True)


import webapp2

class MainPage(webapp2.RequestHandler):
     def get(self):
          def recur_fibo(n):
                if n <= 1:
                     return n
                else:
                    return(recur_fibo(n-1) + recur_fibo(n-2))

          nterms = 8
          if nterms <= 0:
                self.response.write("Please enter a positive integer")
          else:
                self.response.write("Fibonacci sequence:")
                for i in range(nterms):
                     self.response.write(recur_fibo(i))
        
app = webapp2.WSGIApplication([('/',MainPage)],debug=True)